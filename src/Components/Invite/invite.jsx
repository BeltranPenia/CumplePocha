import React from 'react'
import './invite.css'
import backgroundVideo from '../../assets/background.mp4'
import Card from '../Card/card'

const Invite = () => {
  return (
    <div className='invite'>
        <video autoPlay muted loop id='background-video'>
            <source src={backgroundVideo} type='video/mp4' />nope
        </video>
        <Card   icon='cauldron' 
                title='31 de pocha'
                desc = 'para festejar juntos vamos a hacer una fiesta de disfraces!'
                button={false}     
        />

        <Card   icon='skull'
                title='DONDE Y CUANDO'
                desc = 'EL 5 de Octubre Nos vamos a Ijurco 2319 de 19hs a 4hs'
                button={true}
                label='Como llegar'
                url='https://www.google.com/maps/place/Ijurco+2319,+B7000+Tandil,+Provincia+de+Buenos+Aires/@-37.2942648,-59.1156899,19z/data=!3m1!4b1!4m6!3m5!1s0x9591200e2d9f4cab:0x987573a4d5b6989!8m2!3d-37.2942659!4d-59.1150462!16s%2Fg%2F11s_vk1x3b?hl=es&entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D'
        />
        <Card   icon='pumpkin'
                title='QUE TRAER'
                desc = 'lo que quieran tomar, hielo y muchas ganas de bailar'
                button={false}
        />
        <Card   icon='trophy'
                title='CONFIRMACION'
                desc = 'por favor confirmar asistencia hasta el 28 - 09'
                button={true}
                label='confirmar'
                url='https://wa.link/kyh5wi'
        />       
    </div>
  )
}

export default Invite