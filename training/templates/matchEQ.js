// Load AudioContext
var context = new AudioContext();

// Load WaveSurfer
var wavesurfer = loadWaveSurfer('./test.wav', 'waveform', context);

// Do some filters
var EQ = [
    {
        freq: 200,
        type: 'lowshelf'
    }, {
        freq: 500,
        type: 'peaking',
        Q: 1
    }, {
        freq: 1000,
        type: 'peaking',
        Q: 5
    }, {
        freq: 4000,
        type: 'peaking',
        Q: 1
    }, {
        freq: 8000,
        type: 'highshelf'
    }
];
var filterArray = createGraphicEQ(EQ, 40, 'graphic-EQ', context);

// Pass filters to wavesurfer
wavesurfer.backend.setFilters(filterArray);

var transformActive = true;
function toggleTransform() {
    if(transformActive) {
        wavesurfer.backend.setFilters();
        transformActive = false;
    } else {
        wavesurfer.backend.setFilters(filterArray);
        transformActive = true;
    }
}