import React from 'react';
import ReactDOM  from 'react-dom';

function Hello() {
    return (
        <span>Hello</span>
    );
}


function World() {
    return (
        <span>World</span>
    );
}



// Ahead of return there are braces they are not compulsory, .....
// If you remove them make sure that the first starting tag must be ahead of return statement...
// otherwise it will give you error.


// if you have multiple elements in the component then wrap them using React.fragment.....
// Because after rendering it will disappear....
// if you use div tag then this is a block-level element.

function HelloWorld() {
    return [<Hello /> , <World />];
}

// See how react renders whitespaces.....


function WhiteSpaces() {
    return (
        <div>
            White
            Spaces
        </div>
    );
}

function EmptyLines() {
    return (
        <div>
            Empty

            White

            Lines
        </div>
    );
}



function Component() {
return (
<div className='book'>
<div className='title'>
The Title
</div>
<div className='author'>
The Author
</div>
<ul className='stats'>
<li className='rating'>
5 stars
</li>
<li className='isbn'>
12-345678-910
</li>
</ul>
</div>
)
}

function UnderTheHood() {
return (
    
    React.createElement("div",{className: 'book'}, 
        React.createElement("div", {className:"title"}, "The Author"),
        React.createElement("ul",{className:"stats"},
            React.createElement("li", { className:"rating" }, "5 stars"), 
            React.createElement("li", {className: "isbn" }, "12-345678-910")))

    )
}


function SpacesWithNewLines() {
    return(
        <div>
            Non-breaking Spaces
        </div>
    );
}


function Table() {
    return (
            <tr>
                <td>Item 1</td>
                <td>Item 2</td>
                <td>Item 3</td>
            </tr>
    );
}

ReactDOM.render(<Table />,document.querySelector('#root'));