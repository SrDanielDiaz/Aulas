import FormBasic from '../components/FormBasic'
// import FormValidation from '../components/FormValidator'

function AulaForm() {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h2 className='text-4xl'> Crear un Aula </h2>
      <FormBasic />
    </div>
  )
}
export default AulaForm
