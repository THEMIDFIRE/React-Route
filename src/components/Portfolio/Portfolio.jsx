import React, { useState } from 'react';
import Divider from '../Divider/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    const gallery = [
        { image: '/cabin.png' },
        { image: '/cake.png' },
        { image: '/circus.png' },
        { image: '/game.png' },
        { image: '/safe.png' },
        { image: '/submarine.png' }
    ];

    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <section>
            <div className="container pt-4">
                <h2 className="h1 text-center fw-bold text-uppercase mt-2 mb-3">portfolio component</h2>
                <Divider />
                <div className="row g-5 mt-0 mb-4">
                    {gallery.map((item, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <div
                                className="item position-relative overflow-hidden rounded"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <img
                                    src={item.image}
                                    alt={`portfolio-${index}`}
                                    className="img-fluid rounded"
                                    
                                />
                                <div className={`overlay position-absolute bg-primary-subtle d-flex justify-content-center align-items-center transition ${hoveredItem === index ? 'opacity-75' : 'opacity-0'}`} data-bs-toggle="modal" data-bs-target={`#item${index}`}>
                                    <FontAwesomeIcon icon={faPlus} className="text-dark" />
                                </div>
                            </div>
                            <div className="modal fade" id={`item${index}`} tabIndex="-1" aria-labelledby="label" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-body p-0">
                                            <img
                                                src={item.image}
                                                alt={`portfolio-${index}`}
                                                className="img-fluid rounded"
                                                data-bs-toggle="modal" data-bs-target={`item${index}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
