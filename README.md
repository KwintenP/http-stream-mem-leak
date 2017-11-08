Test to see if, when using only subscriptions on http observables, we can have memory leak. 

Turns out that probably it's not the case since http streams always end (either in error or in complete).

Mem screenshot when working with an interval stream:

![interval](https://www.dropbox.com/s/b2fa6tc4bfpvd70/Screenshot%202017-11-08%2019.04.14.png?dl=0)

Mem screenshot when working with an http stream:

![interval](https://www.dropbox.com/s/fwmx41z84eq5roe/Screenshot%202017-11-08%2019.08.16.png?dl=0)
