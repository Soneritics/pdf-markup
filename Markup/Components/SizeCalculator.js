var SizeCalculator = {
    PixelMmRatio: 1 / settings.sizeMultiplier,
    MmPixelRatio: settings.sizeMultiplier,

    ToPixels: function(mm) {
        return mm * this.MmPixelRatio;
    },

    ToMM: function(pixels) {
        return pixels * this.PixelMmRatio;
    }
};

