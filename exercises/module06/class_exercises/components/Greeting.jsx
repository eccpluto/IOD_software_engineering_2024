function Greeting({name='World', children}){

    return (
        <>
        <p>Hello {name} </p>
        {children}
        </>
    )
}

export default Greeting