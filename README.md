# m6-hw6-black-mike

I used StackOverflow, GetBootStrap and W3schools for this assignment. Some of the basic starter HTML was reused from an earlier homework assignment.

I ran into a couple of vexing issues:
1. I used the flex classes for Bootstrap 4. Although they are actually easier once you get used to them, I struggled a bit with things like getting square buttons and having the columns wrap properly at smaller sizes.
2. When adding a child element, I couldn't figure out how to add it as a child to the outer div, which felt for natural. In the end, as a workaround, I just assigned an id to the inner div and then append to that instead.
3. My coding is not very efficient. Rather than having three separate functions for each message, it would have been better to have one function that checks varies its message based on the button clicked. But this would have taken some time to refactor the code. 
4. The messages just keep appending when clicking buttons. I intentionally did not clear the previous message because the instructions did not request this. If needed, I would have added an ID to the newly created node and then added a function that checks for and removes elements with that ID before adding a new one.
