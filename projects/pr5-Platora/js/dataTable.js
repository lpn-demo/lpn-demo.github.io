$(function() {


  $('.table_id').css('width', '100%');


  // TABLES ______________________________________________-

    $('#table_id_1_1').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Поиск",
      "zeroRecords": ""
      },
     "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });


 	// Table 1
  $('#table_id_1').DataTable({
  	"bPaginate": false,
  	"bLengthChange": false,
  	"bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "bAutoWidth": true,
    "scrollX": true,
    scroller: false,
    language: { 
    	search: "",
    	searchPlaceholder: "Поиск",
    	"zeroRecords": ""
    	},
      
    "fnInitComplete": function() {
       var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });


 // Table 2
 $('#table_id_2').DataTable({
  	"bPaginate": false,
  	"bLengthChange": false,
  	"bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
    	search: "",
    	searchPlaceholder: "Поиск",
    	"zeroRecords": ""
    	},
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

 // Table 3
 $('#table_id_3').DataTable({
  	"bPaginate": false,
  	"bLengthChange": false,
  	"bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    "scrollY": false,
    language: { 
    	search: "",
    	searchPlaceholder: "Название банка",
    	"zeroRecords": ""
    	},
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });
 
 // Table 4
 $('#table_id_4').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Поиск",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

 $('#table_id_5').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });
  $('#table_id_5_2').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

 $('#table_id_chart').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

 $('#table_id_chart2').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

 $('#table_id_chart3').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });
 

  $('#table_id_6').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });
  $('#table_id_6_2').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

    $('#table_id_13').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

  $('#table_id_7').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

   $('#table_id_8').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "searching": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

     $('#table_id_9').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Найти адрес",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

   $('#table_id_10').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });


   $('#table_id_11').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });
      $('#table_id_12').DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "orderable": false,
    "ordering": false,
    "scrollX": true,
    language: { 
      search: "",
      searchPlaceholder: "Название банка",
      "zeroRecords": ""
      },
    "fnInitComplete": function() {
      var tabl =  $('.dataTables_scrollBody').perfectScrollbar();
     tabl.on('ps-scroll-x', function(e) {
       var maxL = e.currentTarget.scrollWidth - e.currentTarget.offsetWidth - 30;
       if (maxL < e.target.scrollLeft) {
          $(this).addClass('active');
       }
       else {
          $(this).removeClass('active');
       }
     });
    },
  });

  

  // TABLES ______________________________________________-END


 	//$('<i class="fa fa-search" aria-hidden="true"></i>').appendTo('.myTable .dataTables_filter label');






});


