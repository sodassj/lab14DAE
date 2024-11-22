import { useNavigate } from "react-router-dom";

import { useState, useContext} from "react";
import { AppContext } from "../contexts/AppContext";


import { loginService } from "../services/LoginServices";

const initData ={
    username: '',
    password: '',
}


function LoginPage(){
    const navigate = useNavigate();

    const {login} = useContext(AppContext);
    const [data, setData]=useState(initData);

    const onChangeUserName = (e) => {
        const nData = {...data, username: e.target.value}
        setData(nData);
    };
    const onChangePassword = (e) => {
        const nData = {...data, password: e.target.value}
        setData(nData);
    };


    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const resp = await loginService(data);
            console.log(resp.data);
            login(resp.data);
            navigate("/series");
        } catch(error){
            window.alert('El usuario o contraseña no es correcto');
        }
    
    }

    return (
    	<section className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <div className="card shadow-lg">
                    <div className="card-body p-5">
                        <h1 className="fs-4 card-title fw-bold mb-4 text-center">Login</h1>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="mb-4">
                                <label className="mb-2 text-muted" htmlFor="username">Usuario</label>
                                <input
                                    onChange={onChangeUserName}
                                    id="username"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="mb-2 text-muted" htmlFor="password">Contraseña</label>
                                <input
                                    onChange={onChangePassword}
                                    id="password"
                                    className="form-control"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    required
                                />
                                <div className="d-flex justify-content-between mt-2">
                                    <a href="forgot.html" className="text-muted">
                                        Recuperar Contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="remember" className="form-check-label">
                                        Recordarme
                                    </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-4 text-muted">
                    Copyright &copy; Tecsup 2024
                </div>
            </div>
        </div>
    </div>
</section>

    );
}

export default LoginPage;
