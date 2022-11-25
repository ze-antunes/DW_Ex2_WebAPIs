import { React, useState } from "react";
import Card from './Card'

export default function Display({ title, data, categoryBlocks }) {

    const [checked, setChecked] = useState(false);
    let cards = data ?? [];
    let categories = categoryBlocks ?? [];

    const handleCheckboxChange = () => {
        if (checked === false) {
            cards.sort(function (a, b) {
                let textA = a.name.toUpperCase();
                let textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            categories.sort(function (a, b) {
                let textA = a.name.toUpperCase();
                let textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        } else {
            cards.sort(() => Math.random() - 0.5);
            categories.sort(() => Math.random() - 0.5);
        }
        setChecked(!checked)
    }

    return (
        <div className="display">
            <div className="display__header">
                <h3 className='display__title'>{title}</h3>

                <ul className="display__checkbox">
                    <h3>Sort by:</h3>
                    <li className="display__checkbox-input">
                        <p className="display__checkbox-label">Shuffle</p>
                        <input type="checkbox" className="switch" onChange={() => handleCheckboxChange()} />
                        <p className="display__checkbox-label">A - Z</p>
                    </li>
                </ul>
            </div>

            <div>
                <div className="display__grid">
                    {cards?.map(card => {
                        return <Card key={card.id} cover={card.images[0].url} albumName={card.name} idLink={card.id} owner={card.owner.display_name} />
                    })}
                    {categories?.map(block => {
                        return <Card key={block.id} cover={block.icons[0].url} albumName={block.name} categoryLink={block.id} />
                    })}
                </div>
            </div>
        </div>
    )
}
