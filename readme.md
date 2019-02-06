**Heighway Dragon Curve**


***A recursive fractal curve for design purposes***


This example is based on the following equation:
```
S_n0 = 1 (right turn) 
(S_n)' = the opposite and reversed S_n
S_(n+1) = S_n + 1 + (S_n)'
```

Yarn Usage: 
```
$ yarn init 
$ yarn create react-app appname
$ cd appname
$ yarn start
```


**React JS Notes**


Components can be classes or functions, child components can inherit variables called props


Components use this.props.propname, instead of just prop.propname (which is reserved for classes)


EX.
```
    ReactDOM.render() {
        <componentName variableName = {variableValue}/>
    }
    function componentName (props){
        const variableName = props.variableName;
    }
 ```
