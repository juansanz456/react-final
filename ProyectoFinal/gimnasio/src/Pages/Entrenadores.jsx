import TargetaEntrenadores from "../components/TargetaEntrenadores";

const Entrenadores = () => {
    return (
        <>
        <div className="container py-5 my-5">
        <h1 className="mb-5 text-center fw-bold">Entrenadores</h1>
            <TargetaEntrenadores
                isFollowing
                nombre="James Rodriguez"
                imageSRC="https://images.pexels.com/photos/63707/pexels-photo-63707.jpeg?cs=srgb&dl=pexels-burak-the-weekender-63707.jpg&fm=jpg"
                especialidad="Entrenamiento Funcional"
                descripcion="Especialista en rutinas funcionales y entrenamiento personalizado para todas las edades. Más de 8 años ayudando a transformar vidas en el gimnasio.
Experiencia: 8 años en entrenamiento funcional.
Certificaciones: NASM Certified Personal Trainer.
Frase: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'"
            />
            <TargetaEntrenadores
                isFollowing
                nombre="María Gómez"
                imageSRC="https://images.canal1.com.co/wp-content/uploads/2019/12/02081323/James-Rodriguez-bailando-champeta.jpg"
                especialidad="Yoga y Pilates"
                descripcion="Instructora certificada en yoga y pilates, enfocada en mejorar la flexibilidad, el equilibrio y el bienestar integral de sus alumnos.
Experiencia: 6 años como instructora de yoga y pilates.
Certificaciones: Yoga Alliance RYT 200, Pilates Mat Instructor.
Frase: 'La mente es el límite.'"
            />
            <TargetaEntrenadores
                isFollowing
                nombre="Luis Torres"
                imageSRC="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefanstefancik-91227.jpg&fm=jpg"
                especialidad="Musculación"
                descripcion="Entrenador experto en hipertrofia y musculación, con planes adaptados para principiantes y avanzados. 10 años de experiencia en el sector fitness.
Experiencia: 10 años en musculación y fitness.
Certificaciones: IFBB Certified Trainer.
Frase: 'No cuentes los días, haz que los días cuenten.'"
            />
            <TargetaEntrenadores
                isFollowing
                nombre="Ana Martínez"
                imageSRC="https://c.pxhere.com/photos/c5/70/photo-158709.jpg!d"
                especialidad="Cardio y Spinning"
                descripcion="Apasionada del cardio y spinning, motiva a sus alumnos a alcanzar sus metas de resistencia y pérdida de peso con clases dinámicas y divertidas.
Experiencia: 7 años como instructora de spinning.
Certificaciones: Spinning Instructor Certification.
Frase: 'La energía se contagia, ¡ven a pedalear conmigo!'"
            />
            <TargetaEntrenadores
                isFollowing
                nombre="Javier Ruiz"
                imageSRC="https://d2yoo3qu6vrk5d.cloudfront.net/images/20210713141351/james-rodriguez1-900x485.jpg"
                especialidad="CrossFit"
                descripcion="Coach certificado en CrossFit, enfocado en mejorar la fuerza, agilidad y condición física general a través de entrenamientos intensivos y variados.
Experiencia: 5 años como coach de CrossFit.
Certificaciones: CrossFit Level 1 Trainer.
Frase: 'Entrena duro, vive mejor.'"
            />
            </div>
        </>
    );
}

export default Entrenadores;