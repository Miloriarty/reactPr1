import {useState} from "react";


function ProductCard({name, price, image}) {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            border: '1px solid #49454F',
            backgroundColor: '#1E1922',
            color: '#ECE6F0',
            borderRadius: '24px',
            padding: '20px',
            width: '220px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
            }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '140px',
                        objectFit: 'cover',
                }} />
                <p style={{fontSize: '20px', padding: '8px', color: '#ECE6F0'}}>{name}</p>
                <p style={{fontSize: '16px', color: '#CAC4D0'}}>Price: {price}</p>
                <span style={{fontSize: '16px', color: '#D0BCFF'}}>In cart: {count}</span>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                alignSelf: 'center',
            }}>
                <button onClick={() => setCount(count + 1)}
                style={{
                    backgroundColor: '#D0BCFF',
                    color: '#381E72',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '10px 15px',
                }}>Add to cart</button>

                {count > 0 &&
                    (<button onClick={() =>
                        setCount(value => Math.max(0, value - 1))
                    }
                             style={{
                                 backgroundColor: 'transparent',
                                 color: '#FFB8F0',
                                 border: '1px solid #938F99',
                                 borderRadius: '20px',
                                 padding: '10px 15px',
                             }}
                    >Remove</button>)
                }
            </div>
        </div>
    )
}

export default ProductCard;

