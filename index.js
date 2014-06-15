var fs = require('fs');
var path = require('path');
var untildify = require('untildify');

var dotty = {};

dotty.init = function(opts) {
  this.templateDirectory = opts.templates;
};

dotty.createFile = function(filename, template) {
  var templateLocation = getTemplateLocation(filename, template);

  fs.readFile(templateLocation, "utf-8", function(err, templateContents) {
    if(err) {
      console.log(err);
      throw new Error("Couldn't read template");
    }

    var writeLocation = process.cwd() + "/" + filename;

    fs.writeFile(writeLocation, templateContents, function(err) {
      if(err) {
        console.log(err);
        throw new Error("Couldn't write file");
      }

      console.log("Written:", writeLocation);
    });
  });
};

var getTemplateLocation = function(filename, template) {
  var templateLocation = filename + "/" + template;
  templateLocation = dotty.templateDirectory + "/" + templateLocation;
  return untildify(templateLocation);
};

module.exports = dotty;
