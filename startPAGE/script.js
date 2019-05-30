body {
    margin: 0;
    z - index: 1;
}
*{
    box - sizing: border - box;
}
.container {
    display: flex;
    height: 100 vh;
    justify - content: space - around;
    align - items: center;
    z - index: 10;
}
.card {
    perspective: 1000 px;
    transform - style: preserve - 3 d;
    z - index: 15;
}


.card - item {
        background - color: white;
        width: 250 px;
        height: 250 px;
        transition: transform 0.2 s;
        text - align: center;
    }
    .layer - bg {
        background: url('pr1.png') center no - repeat;
        background - size: cover;
        z - index: 1;
    }
    .layer - 1 {
        background: url('pr0.png') center no - repeat;
        background - size: cover;
        z - index: 2;
    }
