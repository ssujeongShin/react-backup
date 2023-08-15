import React from 'react'
import '../css//YunjoSec04.css'

function YunjoSec04() {
  return (
    <section className="yunjo_sec04">
        <h2 data-aos="fade-up" data-aos-duration="900">FIRST CARE ACTIVATING SERUM VI FILM</h2>
        <figure>
            <video muted loop autoPlay controls id="video02" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
                <source src="./media/yunjo_video/video_pc/yunjo_video02_pc.mp4" type="video/mp4"/>
            </video>
        </figure>
    </section>
  )
}

export default YunjoSec04