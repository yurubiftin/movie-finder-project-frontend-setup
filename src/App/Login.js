import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = ({setIsAuthenticated}) => {
    const [name, setname] = useState('')
    const [userId, setUserId] = useState('');
    const navigate = useNavigate()
    const handleLogin = (e) => {
    
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch('http://localhost:9292/login', {
          method: 'POST',
          body: formData,
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .then(data => {
            setIsAuthenticated(true);
            setname(data.name); 
            setUserId(data.userId);
            navigate('/MovieList');
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      };
      console.log(name,userId)
    return (
    <div>
        <h1 className="text-yellow-300 italic uppercase">Login</h1>
        <div className="flex justify-center items-center">
      <form class="w-full max-w-sm bg-pink-500 shodow-xl rounded-xl p-5 mt-20 " noValidate no-autocomplete onSubmit={handleLogin}>
            <h1 className="text-2xl text-teal-500 text-center mb-6  font-bold">login</h1>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
              Username
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="username" name="name" type="text" placeholder="Jane Doe"
             required
             autoComplete="off"
           />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700" id="inline-password" type="password" placeholder="******************"
             name="password"
             required
             autoComplete="off"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-5">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button class="shadow bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              login
            </button>
          </div>
        </div>
         <div className="text-gray-900 pl-10 block">Dont have account?
           <Link to="/register">
              <button className="shadow ml-8 bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register</button>
           </Link>
         </div>
      </form>
    </div>

</div>
    );
}
 
export default Login