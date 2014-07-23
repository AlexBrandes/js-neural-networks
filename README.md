#JS Neural Networks
==================
##Simple Perceptron Network

This single layer Neural network is set up to learn how to recognize the number 4 in the provided data set, though you could train it to recognize any number/character/shape if you adjust the training data set. View the [demo here](http://fouretch.com/projects/neural-networks).

###How it works

An array of 64 neurons each have a set of weights that are applied to each pixel on the canvas.After each generation (epoche) the neurons are scored based on the number of patterns they were able to correctly guess. The worst performing four neurons are removed and the best performing 4 neurons are duplicated to take their place. The weights of each neuron (corresponding to each pixel on the image) are then mutated to create variation in the population. In this way, the system evolves towards more successful weight numbers. After several dozen generations, the population gets better and better at determining whether the provided image is the number 4 or not.

###Adjusting the speed

Enter a number into the speed field and hit the "update speed" button. The value you enter is the number of milliseconds the system waits between testing inputs so zero is the fastest possible. Use 2000 - 3000 if you want to be able to read the weights in between each input.

###Feeding Forward

The box in the upper right of the screen updates after each generation to show the feed forward view of the neuron weights. This is essentially a visual representation of what the system has learned from its training. Darker colors indicate positive weighting while lighter colors indicate negative weighting.

###User Provided Inputs

Once the system has run through some number of generations (I suggest at least 100, 500+ will be most accurate), you can stop the learning and test your own value. Use the box in the lower right to draw your own input and see how the system responds. Make sure to hit the "stop" button first, then click the "Test Input" button to run the test. You can continue learning at the current generation after a test if you want.

###What's actually being tested?

This is a fairly primitive system that is not actually recognizing what the character looks like. It's creating a probability cloud to determine the probability that the combination of pixel points entered match the learned set of probabilities found in the learning data set. On its own this is not especially accurate and fails often, especially when the frame of the character is off center (try drawing your test in the bottom left corner) or try drawing a shape that looks like the feed forward image. This system could be somewhat accurate if given enough user provided data and would then be showing where a user is most likely to draw the trained character.

###Credits

Written and maintained by [Alex Brandes](https://github.com/alexbrandes)

