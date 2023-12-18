import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuetsionButton } from "../../components/questionButton/QuestionButton";

type OdaiType = {
    theme: string;
    source: string;
}

export const Odai = () => {
    const params = useParams();
    const [odai, setOdai] = useState<OdaiType>({theme: '', source: ''});

    useEffect(() => {
        const map = new Map();

        map.set('1', { theme: 'こんな美容室は嫌だ。どんなの？', source: 'サンプル1' });
        map.set('2', { theme: '地元の42番目にすごいところ、教えてください', source: 'サンプル2' });

        setOdai(map.get(params.odai));
    }, [params.odai]);


    return (
        <div>
            <h1>{odai.theme}</h1>
            <p>出典：{odai.source}</p>
            <QuetsionButton />
        </div>
    );
}