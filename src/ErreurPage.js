import { useNavigate } from "react-router-dom";

function ErreurPage(){
    const navigate = useNavigate();
    const handleRevenirAcceuil = () => {
        navigate('/');
    };
    return (
        <div className="colonne">
            <div className="ligne"><h1>ERREUR 404 - PAGE NON TROUVÉE</h1></div>
            <div className="ligne">
                C'est pas grave, tu sais ce qu'on va faire ? On va revenir à la page d'accueil ...
            </div>
            <div className="ligne">
                <span className="span-btn btn" onClick={handleRevenirAcceuil}>Quelle bonne idée !</span>
            </div>
        </div>
    )
}

export default ErreurPage;