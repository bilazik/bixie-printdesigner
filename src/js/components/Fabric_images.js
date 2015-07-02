module.exports = {

    template: require('./fabric_images.template.html'),

    inherit: true,

    data: function () {
        return {
            figures: []
        };
    },

    methods: {

        addImage: function () {
            var $this = this, obj = this.$getLayer('image', {
                onSetFabricObject: function () {
                    var img = document.createElement('img');
                    img.src = $this.activeAsset.url;
                    this.fObj = new fabric.Image(img, {
                        left: 10,
                        top: 10,
                        width: 120,
                        height: 120
                    });
                }
            });

            this._addLayer(obj);
        }
    }
};