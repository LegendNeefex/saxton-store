import { createContext, useEffect, useState } from "react";
const stateHandler = createContext();

export const ApiProvider = (({children})=>{
    const [burgerIcon,setBurgerIcon] = useState(false)
    const [receivedData, setReceivedData] = useState([])
    const [pwdShow,setPwdShow] = useState()
    const [cartShow,setCartShow] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [emptyCart,setEmptyCart] = useState(false)
    const [emptyOrder,setEmptyOrder] = useState(false)
    const [emptyCartPreview,setEmptyCartPreview] = useState(false)
    const [catData,setCatData] = useState([])
    const [totalQuantity,setTotalQuantity] = useState()
    const [data,setData] = useState({});
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [loginMsg,setLoginMsg] = useState("");
    const [error,setError] = useState(false);
    

    
    
    const [user,setUser] = useState([])
    const [order,setOrder] = useState([])
    const [showOrder,setShowOrder] = useState(false)
    const [orderItem,setOrderItem] = useState([])
    const [text,setText] = useState({
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        mobileNumber:"",
        password:"",
        country:""
    })
    const [profText,setProfText] = useState({
        bio:"",
        pick:"",
        social:"",
        country:"",
        username:""
      })
    const [view,setView] = useState(false)
    const token = localStorage.getItem("token")

    useEffect(()=>{
        if (token) {
            setView(true)
        }else{
            setView(false)
        }
    },[token])

    

    const createUser = async (userData)=>{
        const apiURL = process.env.REACT_APP_API_URL
        const response = await fetch (`${apiURL}/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        if (response.ok) {
            const data = await response.json(); 
            setUser([data, ...user])
        }else if (response.status === 400) {
            setError(true)
        }else{
            console.error('Error checking email:', response.statusText);
        }
    }



    const textHandler = (e) => {
        setText((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            
        }));
        // setText({[e.target.name]: e.target.value,})
        console.log(text);
    }

    const countryClick = (e) => {
        setText((prevState) => ({
            ...prevState,
            country: e.target.value,
        }));
        // setText({country: e.target.value})
    }

    const socialClick = (e) => {
        setProfText((prevState) => ({
            ...prevState,
            pick: e.target.value,
        }));
    }

    //creating order and making payment
    const createOrder = async (orderData) => {
        const token = localStorage.getItem("token");
        const apiURL = process.env.REACT_APP_API_URL
        try {
            setShowOrder(true)

            // Creating the order
            const orderResponse = await fetch(`${apiURL}/orders`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(orderData),
            });
            // Extracting the order id from the response
            const orderDataWithId = await orderResponse.json();
            const orderId = orderDataWithId.id;
            
            // Updating the state with the order
            setTimeout(() => {
                setOrder([orderDataWithId, ...order]);
            }, 1000);
            

        
            // Creating OrderItems
            const orderItemResponse = await fetch(`${apiURL}/orderItems`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderId, receivedData:cartShow}),
            });
        
            // Updating the state with the order item
            const orderItemData = await orderItemResponse.json();
            setTimeout(() => {
                setOrderItem([orderItemData, ...orderItem]);
            }, 3000);


            //make payment with paystack
            const payStackPayment = await fetch(`${apiURL}/orders/payments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({id:orderId})
            });
            const getBack = await payStackPayment.json();
            console.log(getBack.data.authorization_url);

            setTimeout(() => {
                window.location.href = getBack.data.authorization_url;
            }, 3000);

        } catch (error) {
            console.error("Error creating order and order item:", error);
        }
    };
  



    //fetch all categories
    const cateFetcher = (async(req,res)=>{
        const apiURL = process.env.REACT_APP_API_URL
        const msg = await fetch(`${apiURL}/categories`)

        const sentBack = await msg.json() 
        setCatData(sentBack)
    })
    

    useEffect(()=>{
        cateFetcher();
    },[])

    // useEffect(()=>{},[catData])

    const pwdHandler = (()=>{
        if (pwdShow) {
            setPwdShow(false)
        }else{
            setPwdShow(true)
        }
    })

    useEffect(()=>{
        const token = localStorage.getItem("token")
        try {
            if (order.length === 0) {
                setEmptyOrder(true)
            }else{
                if (token) {
                    setEmptyOrder(true)
                    
                }else{
                   setEmptyOrder(false)
                }
                setEmptyOrder(false)
            }
        } catch (error) {
            return("error",error)
        }
    },[order])

    
    useEffect(()=>{
        try {
            if (cartShow.length === 0) {
                setEmptyCart(true)
                setEmptyCartPreview(true)
                setCartCount(0)
            }else{
                setEmptyCart(false)
                setEmptyCartPreview(false)
            }
        } catch (error) {
            return(
                setCartShow(true),
                error
            )
        }
    },[cartShow])

    useEffect(()=>{
        let totalPrice = 0
        for (const item of cartShow) {
            totalPrice += item.unitPrice * (item.quantity)
            setTotalQuantity(totalPrice)
        }
    },[cartShow])
    useEffect(()=>{},[totalQuantity])

    const cartHandler =((data,dataa)=>{
        setCartCount((prev)=>{
            return prev + 1
        })
        if (data){
            data.map((item)=>{
               return setCartShow(() => {
                    return [item, ...cartShow]
                })
            })
        } else if (dataa) {
           dataa.map((item)=>{
                return setCartShow(() => {
                    return [item, ...cartShow]
                })
           })
        }
        
    })

    const deleteHandler = (id) => {
        const updatedCart = cartShow.filter((item) => item.id !== id);
        setCartShow(updatedCart);
        setCartCount((prev) => {
            return prev - 1
        });
    };

   
    const minusHandler = (data) => {
        const productExist = cartShow.find((item)=> item.id === data.id)
        if (productExist) {
            setCartShow(cartShow.map((item)=> item.id === data.id ?
                {...productExist, quantity:item.quantity - (item.quantity > 1 ? 1 : 0)}: item
            ))
        }
    };
  
    const plusHandler = (data) => {
        const productExist = cartShow.find((item)=> item.id === data.id)
        if (productExist) {
            setCartShow(cartShow.map((item)=> item.id === data.id ?
                {...productExist, quantity:item.quantity +(item.quantity < 10 ? 1 : 0)}: item
            ))
        }
    };


    useEffect (()=>{
        const dataFecther = async(req, res)=>{
            const apiURL = process.env.REACT_APP_API_URL
            try{
                const response = await fetch(`${apiURL}/products`)
    
                const data = await response.json();
    
                setReceivedData(data)
            }catch(error){
                return ("error",error)
            }
        }
        dataFecther();
    },[])
    
    useEffect(()=>{},[receivedData])

    function burgerIconHandler() {
        setBurgerIcon(true)
    }

    function closeHandler() {
        setBurgerIcon(false)
    }
    
    const updateAuth = (value) => {
        setIsAuthenticated(value)
    }

    const stateData = {
        burgerIconHandler,
        burgerIcon,
        closeHandler,
        receivedData,
        countryClick,
        pwdHandler,
        pwdShow,
        cartShow,
        cartHandler,
        emptyCart,
        cartCount,
        deleteHandler,
        plusHandler,
        minusHandler,
        catData,
        data,
        setData,
        textHandler,
        text,
        setText,
        user,
        socialClick,
        createUser,
        totalQuantity,
        isAuthenticated,
        setIsAuthenticated,
        updateAuth,
        loginMsg,
        setLoginMsg,
        emptyCartPreview,
        createOrder,
        setEmptyOrder,
        showOrder,
        order,
        setOrder,
        emptyOrder,
        orderItem,
        view,
        setView,
        error,
        setError,
        profText,
        setProfText
    }

    return <stateHandler.Provider value={stateData}>
    {children}
  </stateHandler.Provider>
})

export default stateHandler;