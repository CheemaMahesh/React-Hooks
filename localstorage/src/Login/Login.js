
function handleSubmit(e){
e.preventDefault();
}

export default function Login(){
    return(<>
    <form onSubmit={handleSubmit}>
        <h1>Login to the portal</h1>
        <input placeholder="email"/><br/>
        <input placeholder="password"/><br/>
        <button>Login</button>
    </form>
    </>)
}