import { useNavigate } from "react-router-dom";
function CategoryComponent(props) {
    const navigate = useNavigate();

    const gotoUrl = (codigo) => {
        navigate("/categories/edit/"+codigo);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <div className="d-flex justify-content-between">
                    <button onClick={() => gotoUrl(props.codigo)} className="btn btn-secondary">Editar</button> 
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
  
export default CategoryComponent
