# Totally Tarrot

<a href="https://totallytarot.netlify.app/">Link to site</a>

![Tottaly Tarot](https://i.imgur.com/ojl0kkF.png)

## Tech Used

<ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>JavaScript</li>
    <li>React Router v6</li>
</ul>

## Future Updates

In the future I plan to add the cards elements as well as a possible automated card reading/shuffle.

## Resources

Ideas: 
https://www.biddytarot.com/tarot-card-meanings/major-arcana/fool/
https://www.tarot.com/readings-reports/tarot-readings/free

website: 
https://medium.com/nerd-for-tech/planning-my-next-react-app-tarot-deck-7fbecd8183e0

public image referencing in react: 
https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
I had changed the url from local host during testing to the domain i was hosting it on
https://totallytarot.netlify.app/

## notes

-----Issues Solved

Using strings to get object keys:
https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string

React Router useLocation hook unknown type error for location. state: 
https://github.com/reach/router/issues/414
by: hanpanpan200

If the error message is similar to
```
TS2322: Type 'Card[] | undefined' is not assignable to type 'Card[]'.
  Type 'undefined' is not assignable to type 'Card[]'.
```
It most likely means that on the initial render typescript sees that the data isnt defined it therefor you need to make sure to use conditional rendering and type checking or define the type as a tuple with undefined as one of the types. 

## Things learned

Typescript
CSS variables
Local/Public React File usage for images and assets