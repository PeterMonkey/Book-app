import {useForm} from 'react-hook-form';
import '../style/form.css';

const Form = () =>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <input className="from-control" 
                type="text" 
                placeholder="book name" 
                name="book"
                {...register("book name", {
                    required: {value: true, message: 'Campo requerido'}
            })}
                />
                

                <input className="from-control" 
                type="text" 
                placeholder="author" 
                name="author"
                {...register("author", {
                        required: {value: true, message: 'Campo requerido'}
                })}
                
                />
                

                <button className="btn btn-primary">Listar</button>
            </form>
        </div>
    )
}

export default Form;