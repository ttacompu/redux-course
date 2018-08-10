import reducer from './todo';

describe("Todo Reducer", ()=>{
    test('returns a state object', () =>{

        const result = reducer(undefined, {type : 'ANYTHING'});
        expect(result).toBeDefined();
    })

    test('add to do', () =>{
        const startTodo= [
            { id : 1, name : "test", isComplete : true}
        ]
        const expectTodo =[
            { id : 1, name : "test", isComplete : true},
            { id : 2, name : "another", isComplete : true}
        ]

        const someResult = reducer(startTodo, {type : "TODO_ADD", payload : { id : 2, name : "another", isComplete : true}} );
        expect(expectTodo).toEqual(someResult);
    })

})