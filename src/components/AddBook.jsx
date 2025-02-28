
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './AddBook.css';

const AddBook=()=>{
    const navigate=useNavigate();
    const [formData, setFormData]=useState({
        title:'',
        author:'',
        description:'',
        coverImage:'',
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Book added: ', formData);
        navigate('/')
    };

    return(
        <div className="add-book-container">
            <h1>Add a new book!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" required/>
                <input type="text" name="author" placeholder="Author" required/>
                <textarea name="description" placeholder="Description" required/>
                <input type="url" name="coverImage" placeholder="Cover Image URL" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;