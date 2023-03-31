import { React, useState } from "react";
import { Link } from "react-router-dom";

const Speciality = (props) => {
    const cards = props.data;

    const [ datatext ] = useState({
        subtitle: 'Our Speciality',
        title: 'Complete Solutions for your NFT',
        desc: 'Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit'
    })

    return (
        <section className="tf-section section-speciality">
            <div className="container">
                <div className="row">
                    {/* 左侧文字 */}
                    <div className="col-xl-5 col-md-12">
                        <h5 className="subtitle mb-10" data-aos="fade-up" data-aos-durration="1000">{ datatext.subtitle }</h5>
                        <h3 className="title mb-28" data-aos="fade-up" data-aos-durration="1000">{ datatext.title }</h3>
                        <p className="fs-21" data-aos="fade-up" data-aos-durration="1000">{ datatext.desc }</p>
                    </div>
                    {/* 右侧卡片 */}
                    <div className="col-xl-7 col-md-12">
                        <div className="section-speciality__box">
                            {
                                cards.map((item, index) => {
                                    return <div key={ index } className={ `box-item bg-2 ${ item.class }` } data-aos="flip-left">
                                        <h3 className="color-main">{ item.stt }</h3>
                                        <Link to="/" className="h5">{ item.title }</Link>
                                        <p>{ item.desc }</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speciality;
