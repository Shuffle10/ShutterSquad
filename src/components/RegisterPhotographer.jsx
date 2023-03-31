const RegisterPhotographer = () => {

    const handleSubmit = ()=>{
        
        console.log("Submitted")
    }

    return ( 
        <form>
            <label htmlFor="name">Full Name: </label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" required/>
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" id="phone" required/>
            <button type="submit" onClick={()=>handleSubmit()}>Post</button>
        </form>
     );
}
 
export default RegisterPhotographer;