import person from "./img/person.jpeg";

<div className='App'>
  <div className='container'>
    <h1>Welcome to AOT</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quasi!
    </p>
    <form action='' className='form'>
      <label htmlFor='email'>Email</label>
      <input type='email' name='' id='' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='' id='' />
      <button type='submit'>Create an account</button>
    </form>
    <p style={{ textAlign: "center" }}>or signin with</p>
    <div className='btns'>
      <button className='icon'>
        <i className='fab fa-google'></i>
      </button>
      <button className='icon'>
        <i className='fa-brands fa-facebook'></i>
      </button>
      <button className='icon'>
        <i className='fa-brands fa-apple'></i>
      </button>
    </div>
  </div>
  <div className='container1'>
    <h1>
      Make a <br />
      Dream
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br />
      Eius temporibus autem cumque cupiditate nihil accusamus!
    </p>
    <div className='img-con'>
      <img src={person} alt='' className='person' />
      <p>
        Waleed Lozano <br />
        Product Designer
      </p>
    </div>
  </div>
</div>;
