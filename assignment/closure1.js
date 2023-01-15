function parent() {
    const message = 'Hello World Again';
    function child() {
    alert (message);
    }
    return child;
    }
    const childFN = parent();
    childFN();
    