$(function(){$(document).on("click",".continuous_pagination .pagination .page-item:not(.disabled)",function(n){var i=$(this),a=i.parents(".continuous_pagination"),o=i.find("a").attr("href"),t=a.find("nav"),e=a.find(".spinner");e.removeClass("d-none"),t.remove(),$.get(o,function(n){var i=$(n).find(".continuous_pagination"),o=i.find(".icon-grid").html(),t=i.find("nav").wrap("<div />").parent().html();a.find(".icon-grid").append(o),a.append(t),e.addClass("d-none"),$('#search-results [data-toggle="tooltip"]').tooltip(),$(window).trigger("scroll")}),n.preventDefault()}),$(window).on("load scroll",function(){var n=$(window).scrollTop()+$(window).height(),i=$(".continuous_pagination nav");if(0<i.length){if(i.offset().top-500<=n){var o=i.find(".page-item.active").next().not(".disabled");0<o.length?o.trigger("click"):i.remove()}}})});