import { useNavigate } from "react-router-dom";

export const QuetsionButton = () => {
    const navigate = useNavigate();
    const example = ['1', '2'];

    const onClick = () => {
        const index = Math.floor(Math.random() * example.length);
        navigate({
            pathname: '/odai/'+ example[index]
        })
    };

    return (
        <button onClick={onClick}>出題</button>
    );
}