Creating the Java Backend and Hosting
	
    
    First, we created a parent Java class that represents a node having a left kid, a right kid, and a precedence. Then, we made an operator node and a number node extending the parent node class. After that, we created an Expression Tree Java class containing a root node, methods to verify a prefix input, parse and convert said input into a tree. We also added a hashmap to allow for variables in calculations and a method that went through the tree and calculated each node condensing it into a numerical answer for the next calculation to take place. To host the Backend we created a Function in the function app and uploaded the code to the Azure Portal. Then, we made a JavaScript project that made HTTP GET requests from the Azure Backend Endpoint to call the function and return the output displaying it on a HTML project.

Usage
	
	 To use the project, all you have to do is open the HTML file on the browser. To input an equation all you do is hit the buttons and your equation will show up in a text box. To send your input to the Java backend, make sure that the border on the equals sign is green and then press it. Your answer will appear in the text box.
