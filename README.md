## Resources

Ideas: https://www.tarot.com/readings-reports/tarot-readings/free

website: https://medium.com/nerd-for-tech/planning-my-next-react-app-tarot-deck-7fbecd8183e0

public image referencing in react: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react


## notes

If the error message is similar to
```
TS2322: Type 'Card[] | undefined' is not assignable to type 'Card[]'.
  Type 'undefined' is not assignable to type 'Card[]'.
```
It most likely means that on the initial render typescript sees that the data isnt defined it therefor you need to make sure to use conditional rendering and type checking or define the type as a tuple with undefined as one of the types. 