import './App.css';
import Testimony from './components/Testimony'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimony 
          name="Luis Vasquez"
          country="Perú"
          job="Ingeniero de Sistemas"
          company="Google"
          testimony="Siempre he tenido problemas para aprender JavaScript.He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.Estudiar JavaScript,así como estructuras de datosyalgoritmos en freeCodeCamp me dio las habilidadesyla confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
        <Testimony 
          name="Luis Vasquez"
          country="Perú"
          job="Ingeniero de Sistemas"
          company="Google"
          testimony="Siempre he tenido problemas para aprender JavaScript.He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.Estudiar JavaScript,así como estructuras de datosyalgoritmos en freeCodeCamp me dio las habilidadesyla confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
        <Testimony 
          name="Luis Vasquez"
          country="Perú"
          job="Ingeniero de Sistemas"
          company="Google"
          testimony="Siempre he tenido problemas para aprender JavaScript.He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.Estudiar JavaScript,así como estructuras de datosyalgoritmos en freeCodeCamp me dio las habilidadesyla confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
      </div>
    </div>
  );
}

export default App;