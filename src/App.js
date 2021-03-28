import cls from './App.module.css'
import CounterFunc from './Counter/CounterFunction'
import CounterClass from './Counter/CounterClass'


function App() {
  return (
    <section className={cls.section}>
      <CounterFunc min={1} max={5}/>
      <CounterClass min={1} max={5}/>
    </section>
  )
}

export default App
