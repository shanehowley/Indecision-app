console.log('app.js is running ok!')

// JSX Javascript XML
const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a robot',
    options: []   
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
       render(); 
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();

};
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
              {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options' :'No options'}</p> 
                <p>{app.options.length}</p>
    
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <button onClick={onRemoveAll}>Remove All</button>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                    

                </form>      
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
