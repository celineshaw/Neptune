/**
 * Created by kestas on 7/8/2016.
 */

function popToast(CASE)
{
    switch (CASE)
    {
        case 'LFR _upload_s':
            toastr.success('LFR file upload successful');
            break;
        case 'LFR_upload_f':
            break;
        case 'UCF _upload_s':
            break;
        case 'UCF_upload_f':
            break;
        case 'MINT _upload_s':
            break;
        case 'MINT_upload_f':
            break;
        case 'INI _upload_s':
            break;
        case 'INI_upload_f':
            break;
        case 'SVG _upload_s':
            break;
        case 'SVG_upload_f':
            break;
        case 'JSON _upload_s':
            break;
        case 'JSON_upload_f':
            break;
    }
}

function displayFileContent(File_To_Display)
{
    var string_to_display = '';
    var title = '';

    switch (File_To_Display)
    {
        case 'specifyLFR':
            localStorage.display_file_modal_state = 'specifyLFR';
            localStorage.display_file_modal_name = 'Specify LFR';
            //string_to_display = localStorage.FILE_specifyLFR;
            title = 'LFR Preview';
            $('.modal-body-prev').load('/uploads/Specify/specifyLFR.v');
            $('.modal-title-prev').text(title);
            break;
        case 'specifyUCF':
            localStorage.display_file_modal_state = 'specifyUCF';
            localStorage.display_file_modal_name = 'Specify_UCF';
            //string_to_display = localStorage.FILE_specifyUCF;
            title = 'UCF Preview';
            $('.modal-body-prev').load('/uploads/Specify/specifyUCF.json');
            $('.modal-title-prev').text(title);
            break;
        case 'designMINT':
            localStorage.display_file_modal_state = 'designMINT';
            localStorage.display_file_modal_name = 'Design_MINT';
            //string_to_display = localStorage.FILE_designMINT;
            title = 'MINT Preview';
            $('.modal-body-prev').load('/uploads/Design/designMINT.uf');
            $('.modal-title-prev').text(title);
            break;
        case 'designINI':
            localStorage.display_file_modal_state = 'designINI';
            localStorage.display_file_modal_name = 'Design_INI';
            //string_to_display = localStorage.FILE_designINI;
            title = 'INI Preview';
            $('.modal-body-prev').load('/uploads/Design/designINI.txt');
            $('.modal-title-prev').text(title);
            break;
        case 'buildSVG':
            localStorage.display_file_modal_state = 'buildSVG';
            localStorage.display_file_modal_name = 'Build_SVG';
            //string_to_display = localStorage.FILE_buildSVG;
            title = 'SVG Preview';
            $('.modal-body-prev').load('/uploads/Build_Verify/buildSVG.svg');
            $('.modal-title-prev').text(title);
            break;
        case 'buildJSON':
            localStorage.display_file_modal_state = 'buildJSON';
            localStorage.display_file_modal_name = 'Build_JSON';
            //string_to_display = localStorage.FILE_buildJSON;
            title = 'JSON Preview';
            $('.modal-body-prev').load('/uploads/Build_Verify_buildJSON.json');
            $('.modal-title-prev').text(title);
            break;
    }
    // var dataArray = JSON.parse(string_to_display);
    // $('#myModalLabel').append(title);
    // for (var i = 0; i < dataArray.length; i++)
    // {
    //     $('#fileGoesHere').append(dataArray[i] + '<br>' + '<br>');
    // }
    // $('#fileGoesHere').text(string_to_display);
}

function clearPreviewModalContent() 
{
    $('#fileGoesHere').empty();
    $('#myModalLabel').empty();
}

function changeSpecifyTabs(Editor,Tab_To_Switch_To,SessionArray)
{
    switch (Tab_To_Switch_To)
    {
        case 'LFRtab':
            document.getElementById('LFRtab').className = 'active';
            document.getElementById('UCFtab').className = '';
            localStorage.specify_editor_state = 'specifyLFR';
            Editor.setSession(SessionArray[0]);
            if (localStorage.lfr_state == 'write')
            {
                Editor.setReadOnly(false);
            }
            else 
            {
                Editor.setReadOnly(true);
            }
            break;
        case 'UCFtab':
            document.getElementById('LFRtab').className = '';
            document.getElementById('UCFtab').className = 'active';
            localStorage.specify_editor_state = 'specifyUCF';
            Editor.setSession(SessionArray[1]);
            if (localStorage.ucf_state == 'write')
            {
                Editor.setReadOnly(false);
            }
            else
            {
                Editor.setReadOnly(true);
            }
            break;
    }
}

function changeDesignTabs(Editor,Tab_To_Switch_To,SessionArray)
{
    switch (Tab_To_Switch_To)
    {
        case 'MINTtab':
            document.getElementById('INItab').className = '';
            document.getElementById('MINTtab').className = 'active';
            localStorage.design_editor_state = 'designMINT';
            Editor.setSession(SessionArray[0]);
            if (localStorage.mint_state == 'write')
            {
                Editor.setReadOnly(false);
            }
            else
            {
                Editor.setReadOnly(true);
            }
            break;
        case 'INItab':
            document.getElementById('INItab').className = 'active';
            document.getElementById('MINTtab').className = '';
            localStorage.design_editor_state = 'designINI';
            Editor.setSession(SessionArray[1]);
            if (localStorage.ini_state == 'write')
            {
                Editor.setReadOnly(false);
            }
            else
            {
                Editor.setReadOnly(true);
            }
            break;
    }
}

function saveEditorContent(Editor_To_Save_Content,FILE_TYPE)
{
    var EDITOR_SESSION = [];
    var editor_session = '';
    var file_size = Editor_To_Save_Content.session.getLength();
    for (var i = 0; i < file_size; i++)
    {
        var tempLine = Editor_To_Save_Content.session.getLine(i);
        editor_session = editor_session + '\n' + tempLine;
        EDITOR_SESSION.push(tempLine);
    }
    switch(FILE_TYPE)
    {
        case 'specifyLFR':
            localStorage.FILE_specifyLFR =  JSON.stringify(EDITOR_SESSION);
            //downloadFile('','specifyLFR','','localStorage');
            downloadFile('','specifyLFR',editor_session,'inputString');
            break;
        case 'specifyUCF':
            localStorage.FILE_specifyUCF =  JSON.stringify(EDITOR_SESSION);
            //downloadFile('','specifyUCF','','localStorage');
            downloadFile('','specifyUCF',editor_session,'inputString');
            break;
        case 'designINI':
            localStorage.FILE_designINI =  JSON.stringify(EDITOR_SESSION);
            //downloadFile('','designINI','','localStorage');
            downloadFile('','designINI',editor_session,'inputString');
            break;
        case 'designMINT':// Fix
            localStorage.FILE_designMINT =  JSON.stringify(EDITOR_SESSION);
            //downloadFile('','designMINT','','localStorage');
            downloadFile('','designMINT',editor_session,'inputString');
            break;
    }
    //fileTrayIndicators();
}

function clearBackEnd()
{
    var string_to_write = '';
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverMINT'}); //Clear MINT
    //$.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverMINT'}); //Clear MINT_prevImg
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverJSON'}); //Clear JSON
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverSVG_bounding'}); //Clear SVG
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverSVG_cell'}); //Clear SVG
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverSVG_flow'}); //Clear SVG
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverSVG_control'}); //Clear SVG
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverEPS_device'}); //Clear EPS_device
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'serverEPS_photo'}); //Clear EPS_photo
}

function clearFrontEnd()
{
    localStorage.clear();
    var string_to_write = '';
    downloadFile('','specifyLFR','','inputString');
    downloadFile('','specifyUCF','','inputString');
    downloadFile('','designMINT','','inputString');
    downloadFile('','designINI','','inputString');
    downloadFile('','buildJSON','','inputString');
    downloadFile('','buildSVG_boundary','','inputString');
    downloadFile('','buildSVG_cell','','inputString');
    downloadFile('','buildSVG_control','','inputString');
    downloadFile('','buildSVG_flow','','inputString');
    downloadFile('','buildEPS_device','','inputString');
    downloadFile('','buildEPS_photo','','inputString');
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'specifyLFR'}); //Clear LFR
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'specifyUCF'}); //Clear UCF
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'designINI'}); //Clear INI
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'designMINT'}); //Clear MINT
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildJSON'}); //Clear JSON
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildSVG_bounding'}); //Clear SVG_boundary
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildSVG_cell'}); //Clear SVG_cell
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildSVG_control'}); //Clear SVG_control
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildSVG_flow'}); //Clear SVG_flow
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildEPS_device'}); //Clear EPS_device
    $.post("/api/writeToFile",{fileData: string_to_write, fileType: 'buildEPS_photo'}); //Clear EPS_photo
}

function clearFiles()
{
    $.post('/api/clearFiles');
}

function loadDefaultFiles()
{
    var postDownload_defaultUCF = $.ajax
    ({
        type: "POST",
        url: '/api/download',
        data: {downloadType:'default_ucf', fileLocation:'server'},
        success: null,
        dataType: 'text'
    });
    postDownload_defaultUCF.done(function(data)
    {
        var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
        downloadFile('specifyUCF','specifyUCF',data,'inputString');
    });
    
    var postDownload_defaultINI = $.ajax
    ({
        type: "POST",
        url: '/api/download',
        data: {downloadType:'default_ini', fileLocation:'server'},
        success: null,
        dataType: 'text'
    });
    postDownload_defaultINI.done(function(data)
    {
        var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
        downloadFile('designINI','designINI',data,'inputString');
    });
}

function initiateGUI()
{
    //clearBackEnd();
    //clearFrontEnd();
    clearFiles();
    loadDefaultFiles();
}

function downloadFile(File_Name,FILE_TYPE,String_To_Write,method)
{
    // IMPLEMENT AUTO SAVE BEFORE DOWNLOAD!
    // ALSO LOOK INTO res.download!
    var file_name = '';
    var string_to_write = '';
    if (method == 'localStorage')
    {
        switch (FILE_TYPE) {
            case 'specifyLFR':
                string_to_write = localStorage.FILE_specifyLFR;
                file_name = 'specifyLFR';
                break;
            case 'specifyUCF':
                string_to_write = localStorage.FILE_specifyUCF;
                file_name = 'specifyUCF';
                break;
            case 'designINI':
                string_to_write = localStorage.FILE_designINI;
                file_name = 'designINI';
                break;
            case 'designMINT':
                string_to_write = localStorage.FILE_designMINT;
                file_name = 'designMINT';
                break;
            case 'buildJSON':
                string_to_write = localStorage.FILE_buildJSON;
                file_name = 'buildJSON';
                break;
            case 'buildSVG_boundary':
                string_to_write = localStorage.FILE_buildSVGboundary;
                file_name = 'buildSVG_boundary';
                break;
            case 'buildSVG_cell':
                string_to_write = localStorage.FILE_buildSVGcell;
                file_name = 'buildSVG_cell';
                break;
            case 'buildSVG_control':
                string_to_write = localStorage.FILE_buildSVGcontrol;
                file_name = 'buildSVG_control';
                break;
            case 'buildSVG_flow':
                string_to_write = localStorage.FILE_buildSVGflow;
                file_name = 'buildSVG_flow';
                break;
            case 'buildEPS_device':
                string_to_write = localStorage.FILE_buildEPSdevice;
                file_name = 'buildEPS_device';
                break;
            case 'buildEPS_photo':
                string_to_write = localStorage.FILE_buildEPSphoto;
                file_name = 'buildEPS_photo';
                break;
            case 'clear':
                string_to_write = '';
        }
    }
    if (method == 'inputString')
    {
        string_to_write = String_To_Write;
        file_name = File_Name;
    }

    $.post("/api/writeToFile",{fileData: string_to_write, fileType: FILE_TYPE});

    // var w = window.open();
    // var html = JSON.parse(string_to_write);
    // for (var i = 0; i < html.length; i++) {
    //     $(w.document.body).append(html[i] + '<br>');
    // }
}

function fill_editor(File_To_Fill_Editor_With,Editor_To_Fill,session)
{
    // Clear Editor before adding our file 
    Editor_To_Fill.setSession(session);
    Editor_To_Fill.session.setValue('');
    
    // We'll fill the editor line-by-line, so we needa know how many lines we're adding
    var file_size = File_To_Fill_Editor_With.length;
    
    
    for (var i = 0; i < file_size; i++)
    {
        Editor_To_Fill.session.replace({
            start: {row: i, column: 0},
            end: {row: i, column: Number.MAX_VALUE}
        }, File_To_Fill_Editor_With[i] + '\n')
    }
}

function pushFileToEditor(Editor_To_Push_Toward,FILE_TYPE,session)
{
    var CONTENT_TO_PUSH = [];
    switch(FILE_TYPE)
    {
        case 'specifyLFR':
            $.get('../uploads/Specify/specifyLFR.v',function(data)
            {
                CONTENT_TO_PUSH = data.split("\n");
                fill_editor(CONTENT_TO_PUSH,Editor_To_Push_Toward,session);

                document.getElementById('LFRtab').className = 'active';
                document.getElementById('UCFtab').className = '';
            });
            //CONTENT_TO_PUSH = JSON.parse(localStorage.LFR_start_STRING);
            break;
        case 'specifyUCF':
            $.get('../uploads/Specify/specifyUCF.json',function(data)
            {

                Editor_To_Push_Toward.setSession(session);
                Editor_To_Push_Toward.session.setValue('');
                Editor_To_Push_Toward.session.setValue(JSON.stringify(data, null, '\t'));

                
                // var strArray = [];
                // for (var i; i < data.length; i++)
                // {
                //     var ss = data[i];
                //     for (var j in ss)
                //     {
                //         strArray.push(ss[j]);
                //     }
                // }
                //     result.push([i, json_data [i]]);
                //
                //
                // var Data = JSON.stringify(data);
                // CONTENT_TO_PUSH = Data.split(/[\r\n]+/);
                // fill_editor(CONTENT_TO_PUSH,Editor_To_Push_Toward,session);
               
                
                document.getElementById('LFRtab').className = '';
                document.getElementById('UCFtab').className = 'active';
            });
            //CONTENT_TO_PUSH = JSON.parse(localStorage.LFR_STRING);
            break;
        case 'designINI':
            $.get('../uploads/Design/designINI.txt',function(data)
            {
                CONTENT_TO_PUSH = data.split("\n");
                fill_editor(CONTENT_TO_PUSH,Editor_To_Push_Toward,session);

                document.getElementById('INItab').className = 'active';
                document.getElementById('MINTtab').className = '';
            });
            //CONTENT_TO_PUSH = JSON.parse(localStorage.MINT_STRING);
            break;
        case 'designMINT':
            $.get('../uploads/Design/designMINT.uf',function(data)
            {
                CONTENT_TO_PUSH = data.split("\n");
                fill_editor(CONTENT_TO_PUSH,Editor_To_Push_Toward,session);

                document.getElementById('INItab').className = '';
                document.getElementById('MINTtab').className = 'active';
            });
            //CONTENT_TO_PUSH = JSON.parse(localStorage.UCF_STRING);
            break;
    }
}

function refreshEditor(Editor_To_Refresh, File_To_Fill_Editor_With)
{
    var file = [];
    switch (File_To_Fill_Editor_With)
    {
        case 'specifyLFR':
            file = JSON.parse(localStorage.FILE_specifyLFR);
            break;
        case 'specifyUCF':
            file = JSON.parse(localStorage.FILE_specifyUCF);
            break;
        case 'designMINT':
            file = JSON.parse(localStorage.FILE_designMINT);
            break;
        case 'designINI':
            file = JSON.parse(localStorage.FILE_designINI);
            break;
    }
    fill_editor(file, Editor_To_Refresh);
}

function saveEditorOptions(Editor_To_Update,theme_ID,syntax_ID,fontSize_ID,fontFamily_ID)
{
    var THEME =  (document.getElementById(theme_ID)).value;
    var SYNTAX = (document.getElementById(syntax_ID)).value;
    var FONT_SIZE =  (document.getElementById(fontSize_ID)).value;
    var FONT_FAMILY = (document.getElementById(fontFamily_ID)).value;
    var editor = ace.edit(Editor_To_Update);

    var theme_str = "ace/theme/" + THEME;
    var mode_str = "ace/mode/" + SYNTAX;


    editor.setTheme(theme_str);
    editor.getSession().setMode(mode_str);
    editor.setOptions({
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE
    });
}

function openDownloadModal()
{
    (document.getElementById('download_modal')).style.display = "block";
}

function closeDownloadModal()
{
    (document.getElementById('download_modal')).style.display = "none";
}

// *********** LFR --> MINT Functions ************ //

function translateLFR()
{
    localStorage.WORKFLOW_STAGE = 'design';
    //restartTranslateCenter();

    var translate = $.post('/api/translateLFR',{filePath: '../public/uploads/Specify/specifyLFR.v'},function(data)
    {
        var status = data.terminalStatus;
        if (status == 'Success')
        {
            var postDownload = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'mint', fileLocation:'server'},
                success: null,
                dataType: 'text'
            });
            postDownload.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                downloadFile('designMINT','designMINT',data,'inputString');

                $("#myModal_translateComplete").modal();

                editor_previewMMOutput.getSession().setMode('ace/mode/mint');
                var file_size = content.length;
                editor_previewMMOutput.session.setValue('');
                for (var i = 0; i < file_size; i++)
                {
                    editor_previewMMOutput.session.replace({
                        start: {row: i, column: 0},
                        end: {row: i, column: Number.MAX_VALUE}
                    }, content[i] + '\n')
                }
            });
        }
        if (status == 'Failure')
        {
            terminalLog('Translation Failed!');
            terminalLog('Fluigi translator was unable to process your file.');
            terminalLog('Please check your file for syntax errors.');
            terminalLog('You may review you console readout to help diagnose your error.');
            // $('.translate_readout').append('<br>');
            // var errorMessage = '<span style="color:red">Translation Failed!<br>Fluigi translator was unable to process your file.<br>Please check your file for syntax errors.<br>You may review you console readout to help diagnose your error.</span>';
            // $('.translate_readout').append(errorMessage);
        }
    });
}

function restartTranslateCenter()
{
    (document.getElementById('commit_LFR')).style.backgroundColor = '';
    (document.getElementById('upload_specifyLFR')).elements["uploadfile_LFR"].disabled = false;
    (document.getElementById('commit_UCF')).style.backgroundColor = '';
    (document.getElementById('upload_specifyUCF')).elements["uploadfile_UCF"].disabled = false;
    lock_translate();
}

function MINTflow(method)
{
    switch (method)
    {
        case 'push':
            var postDownload = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'mint', fileLocation:'server'},
                success: null,
                dataType: 'text'
            });
            postDownload.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                localStorage.FILE_designMINT = JSON.stringify(content);
                downloadFile('designMINT','designMINT',data,'inputString');
                $("#proceedDesign").show();
            });
            break;
        case 'download': //Deprecated - download ocures at html tag
            var postDownload = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'mint', fileLocation:'server'},
                success: null,
                dataType: 'text'
            });
            postDownload.done(function(data)
            {
                var content = JSON.stringify(data.split(/[\r\n]+/));
                var string_to_write = content;
                var w = window.open();
                var html = JSON.parse(string_to_write);
                for (var i = 0; i < html.length; i++) {
                    $(w.document.body).append(html[i] + '<br>');
                }
                $("#proceedDesign").show();
            });
            break;
    }
}

// *********** MINT --> SVG,JSON Functions ************ //

function compileMINT()
{
    localStorage.WORKFLOW_STAGE = 'build';
    //restartCompileCenter();
    //$("#myModal_compileWait").modal();
    $.post('/api/compileMint',{filePath: '../public/uploads/Design/designMINT.uf'},function(data)
    {
        var status = data.terminalStatus;
        if (status == 'Success')
        {
            // JSON needs to be moved locally.
            // $.get('../../output/testDevice.json',function(data) {
            //     downloadFile('buildJSON','buildJSON',data,'inputString');
            // });
            var postDownload_JSON = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'json', fileLocation:'server'},
                success: null,
                dataType: 'text'
            });
            postDownload_JSON.done(function(data)
            {
                downloadFile('buildJSON','buildJSON',data,'inputString');
                $.get('../../output/testDevice.json',function(data)
                {
                    //(document).getElementById('myModal_compileComplete').modal('show');
                    $("#myModal_compileComplete").modal('show');
                    editor_previewFFOutput.getSession().setMode("ace/mode/json");
                    //$('#preview_title').text('User Constrain File');
                    //var file_size = content.length;
                    editor_previewFFOutput.session.setValue('');
                    editor_previewFFOutput.session.setValue(JSON.stringify(data, null, '\t'));
                });
            });

            //SVG's Don't work-- leave in output folder
            // $.get('../../output/testDevice_device_cell.svg',function(data) {
            //     downloadFile('buildSVG_cell','buildSVG_cell',data,'inputString');
            // });
            // $.get('../../output/testDevice_device_control.svg',function(data) {
            //     downloadFile('buildSVG_control','buildSVG_control',data,'inputString');
            // });
            // $.get('../../output/testDevice_device_flow.svg',function(data) {
            //    downloadFile('buildSVG_flow','buildSVG_flow',data,'inputString');
            // });
            // $.get('../../output/testDevice_device.eps',function(data) {
            //     downloadFile('buildEPS_device','buildEPS_device',data,'inputString');
            // });
            // $.get('../../output/testDevice_photomask.eps',function(data) {
            //     downloadFile('buildEPS_photo','buildEPS_photo',data,'inputString');
            // });

            //$('#myModal_compileComplete').modal();
            
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
            // //  ******** PULL JSON FROM SERVER ********
            // var postDownload_JSON = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'json', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_JSON.done(function(data)
            // {
            //     downloadFile('buildJSON','buildJSON',data,'inputString');
            //     $.get('../uploads/Build_Verify/buildJSON.json',function(data)
            //     {
            //         $("#myModal_compileComplete").modal();
            //         editor_previewFFOutput.getSession().setMode("ace/mode/json");
            //         //$('#preview_title').text('User Constrain File');
            //         //var file_size = content.length;
            //         editor_previewFFOutput.session.setValue('');
            //         editor_previewFFOutput.session.setValue(JSON.stringify(data, null, '\t'));
            //     });
            // });
            //
            // // ******** PULL SVG_BOUNDARY FROM SERVER ********
            // // var postDownload_SVG_boundary = $.ajax
            // // ({
            // //     type: "POST",
            // //     url: '/api/download',
            // //     data: {downloadType:'svg_bounding'},
            // //     success: null,
            // //     dataType: 'text'
            // // });
            // // postDownload_SVG_boundary.done(function(data)
            // // {
            // //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            // //     downloadFile('buildSVG_boundary','buildSVG_boundary',data,'inputString');
            // //
            // // });
            //
            // // ******** PULL SVG_CELL FROM SERVER ********
            // var postDownload_SVG_cell = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'svg_cell', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_SVG_cell.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     downloadFile('buildSVG_cell','buildSVG_cell',data,'inputString');
            // });
            //
            // // ******** PULL SVG_CONTROL FROM SERVER ********
            // var postDownload_SVG_control = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'svg_control', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_SVG_control.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     downloadFile('buildSVG_control','buildSVG_control',data,'inputString');
            // });
            //
            // // ******** PULL SVG_FLOW FROM SERVER ********
            // var postDownload_SVG_flow = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'svg_flow', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_SVG_flow.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     downloadFile('buildSVG_flow','buildSVG_flow',data,'inputString');
            // });
            //
            // // ******** PULL EPS_DEVICE FROM SERVER ********
            // var postDownload_EPS_device = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'eps_device', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_EPS_device.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     downloadFile('buildEPS_device','buildEPS_device',data,'inputString');
            // });
            //
            // // ******** PUL EPS_PHOTO FROM SERVER ********
            // var postDownload_EPS_photo = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'eps_photo', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_EPS_photo.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     downloadFile('buildEPS_photo','buildEPS_photo',data,'inputString');
            // });
            // $('#myModal_compileComplete').modal();
            //
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
            // //  XXXXXXXXXXXXXXXX PRE PUBLIC OUTPUT FOLDER XXXXXXXXXXXXXXXXXXXXXXXXXX
        }

        if (status == 'Failure')
        {
            terminalLog('Compilation Failed!');
            terminalLog('Fluigi place and route was unable to process your file.');
            terminalLog('Please check your file for syntax errors.');
            terminalLog('You may review you console readout to help diagnose your error.');
        }
    });
}

function restartCompileCenter()
{
    (document.getElementById('commit_MINT')).style.backgroundColor = '';
    (document.getElementById('upload_designMINT')).elements["uploadfile_MINT"].disabled = false;
    (document.getElementById('commit_INI')).style.backgroundColor = '';
    (document.getElementById('upload_designINI')).elements["uploadfile_INI"].disabled = false;
    lock_compile();
}

function JSON_SVGflow(method)
{
    switch (method)
    {
        case 'push':

            //  ******** PULL JSON FROM SERVER ********
            var postDownload_JSON = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'json', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_JSON.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildJSON','buildJSON',data,'inputString');

                $('#myModal_compilePreview').modal();
            });

            // ******** PULL SVG_BOUNDARY FROM SERVER ********
            // var postDownload_SVG_boundary = $.ajax
            // ({
            //     type: "POST",
            //     url: '/api/download',
            //     data: {downloadType:'svg_bounding', fileLocation:'client'},
            //     success: null,
            //     dataType: 'text'
            // });
            // postDownload_SVG_boundary.done(function(data)
            // {
            //     var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
            //     //localStorage.FILE_buildJSON = JSON.stringify(content);
            //     downloadFile('buildSVG_boundary','buildSVG_boundary',data,'inputString');
            //
            //     $('#myModal_compilePreview').modal();
            // });

            // ******** PULL SVG_CELL FROM SERVER ********
            var postDownload_SVG_cell = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'svg_cell', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_SVG_cell.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildSVG_cell','buildSVG_cell',data,'inputString');

                $('#myModal_compilePreview').modal();
            });

            // ******** PULL SVG_CONTROL FROM SERVER ********
            var postDownload_SVG_control = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'svg_control', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_SVG_control.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildSVG_control','buildSVG_control',data,'inputString');

                $('#myModal_compilePreview').modal();
            });

            // ******** PULL SVG_FLOW FROM SERVER ********
            var postDownload_SVG_flow = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'svg_flow', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_SVG_flow.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildSVG_flow','buildSVG_flow',data,'inputString');

                $('#myModal_compilePreview').modal();
            });

            // ******** PULL EPS_DEVICE FROM SERVER ********
            var postDownload_EPS_device = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'eps_device', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_EPS_device.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildEPS_device','buildEPS_device',data,'inputString');

                $('#myModal_compilePreview').modal();
            });

            // ******** PUL EPS_PHOTO FROM SERVER ********
            var postDownload_EPS_photo = $.ajax
            ({
                type: "POST",
                url: '/api/download',
                data: {downloadType:'eps_photo', fileLocation:'client'},
                success: null,
                dataType: 'text'
            });
            postDownload_EPS_photo.done(function(data)
            {
                var content = data.split("\n"); //var content = JSON.stringify(data.split(/[\r\n]+/));
                //localStorage.FILE_buildJSON = JSON.stringify(content);
                downloadFile('buildEPS_photo','buildEPS_photo',data,'inputString');

                $('#myModal_compilePreview').modal();
            });



        // case 'download':
        //     var postDownloadJSON = $.ajax
        //     ({
        //         type: "POST",
        //         url: '/api/download',
        //         data: {downloadType:'json'},
        //         success: null,
        //         dataType: 'text'
        //     });
        //     postDownloadJSON.done(function(data)
        //     {
        //
        //         var content = JSON.stringify(data.split(/[\r\n]+/));
        //         var string_to_write = content;
        //         var w = window.open();
        //         var html = JSON.parse(string_to_write);
        //         for (var i = 0; i < html.length; i++) {
        //             $(w.document.body).append(html[i] + '<br>');
        //         }
        //         $("#proceedVerify").show();
        //     });
        //
        //     var postDownloadSVG = $.ajax
        //     ({
        //         type: "POST",
        //         url: '/api/download',
        //         data: {downloadType:'svg'},
        //         success: null,
        //         dataType: 'text'
        //     });
        //     postDownloadSVG.done(function(data)
        //     {
        //         var content = JSON.stringify(data.split(/[\r\n]+/));
        //         var string_to_write = content;
        //         var w2 = window.open();
        //         var html = JSON.parse(string_to_write);
        //         for (var i = 0; i < html.length; i++) {
        //             $(w2.document).append(html[i] + '<br>');
        //         }
        //         $("#proceedVerify").show();
        //     });
        //     break;
    }
}

function calibrate()
{
    $.post('/api/calibrate',{filePath: '../public/uploads/Design/designMINT.uf'},function(data) 
    {
        
    });
}

function syncFilesWithServer()
{
    
}

function downloadZip()
{
    
    $.post('/api/zipFiles',function (data)
    {
        var content = data.split('\n');
        for (var i = 0; i < content.length; i++)
        {
            var div = document.getElementById('zipInfo');
            div.innerHTML = div.innerHTML + content[i] + '<br>';
    }
    });
}

function generateUCF_UI()
{
    generateUCF_UI.count = generateUCF_UI.count + 1 || ( $("#accordion div.panel-default").length  );
    var titleRef = "#content" + generateUCF_UI.count;
    var titleREF = "content" + generateUCF_UI.count;
    var operator_id = "operator_" + generateUCF_UI.count;
    var name_id = "name_" + generateUCF_UI.count;
    var input_id = "inputs_" + generateUCF_UI.count;
    var inputTerms_id = "inputTerms_" + generateUCF_UI.count;
    var outputs_id = "outputs_" + generateUCF_UI.count;
    var outputTerms_id = "outputTerms_" + generateUCF_UI.count;
    var import_id = "import_" + generateUCF_UI.count;
    var path_id = "path_" + generateUCF_UI.count;
    var mint_id = "mint_" + generateUCF_UI.count;
    var layer_id = "layer_" + generateUCF_UI.count;

    var divID = 'id' + generateUCF_UI.count;
    var operator;
    var name;

    var opId = 'op' + generateUCF_UI.count;
    var boobs = '\'' + opId + '\'';

    var html = '<div class="panel panel-default" id=opId > \
        <div class="panel-heading"> \
            <h4 class="panel-title"> \
                <a data-toggle="collapse" data-parent="#accordion" href=titleRef> \
                    (temp) &nbsp  temp \
                </a> \
                <span class="pull-right"> \
                    <button type="button" class="btn btn-xs btn-danger" onclick="deleteOp(boobs)">x</button> \
                </span> \
            </h4> \
        </div> \
        <div id=titleREF class="panel-collapse collapse "> \
            <div class="panel-body"> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Operator </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="operatorTag" class="form-control" type="text" value="" id=operator_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Name </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="nameTag" class="form-control" type="text" value="" id=name_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Inputs </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="inputsTag" class="form-control" type="number" value="" id=inputs_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Input Terms </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="inputTermsTag" class="form-control" type="text" value="" id=inputTerms_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Outputs </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="outputsTag" class="form-control" type="number" value="" id=outputs_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Output Terms </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="outputTermsTag" class="form-control" type="text" value="" id=outputTerms_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Import </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="importTag" class="form-control" type="text" value="" id=import_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Path </strong></label> \
                    <div class="col-xs-10"> \
                        <input cname="pathTag" lass="form-control" type="text" value="" id=path_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Mint </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="mintTag" class="form-control" type="text" value="" id=mint_id> \
                    </div> \
                </div> \
                <div class="form-group row"> \
                    <label for="example-text-input" class="col-xs-2 col-form-label"><strong> Layer </strong></label> \
                    <div class="col-xs-10"> \
                        <input name="layerTag" class="form-control" type="text" value="" id=layer_id> \
                    </div> \
                </div> \
            </div> \
        </div> \
    </div> \ ';


    html = html.replace('titleRef',titleRef);
    html = html.replace('titleREF',titleREF);
    html = html.replace('titleRef',titleRef);
    html = html.replace('operator_id',operator_id);
    html = html.replace('name_id',name_id);
    html = html.replace('input_id',input_id);
    html = html.replace('inputTerms_id',inputTerms_id);
    html = html.replace('outputs_id',outputs_id);
    html = html.replace('outputTerms_id',outputTerms_id);
    html = html.replace('import_id',import_id);
    html = html.replace('path_id',path_id);
    html = html.replace('mint_id',mint_id);
    html = html.replace('layer_id',layer_id);
    html = html.replace('opId',opId);
    html = html.replace('boobs',boobs);

    //document.getElementById('ucf_maker').appendChild(html);
    $("#accordion").append(html);
}

function generateUCF()
{
    var numOperators = $("#accordion div.panel-default").length;
    var ids = $('.form-control').id;
    var JSON = [];


    var operatorInfo = document.getElementsByTagName('operatorTag');
    var nameInfo = document.getElementsByTagName('nameTag');
    var inputsInfo = document.getElementsByTagName('inputsTag');
    var inputTermsInfo = document.getElementsByTagName('inputTermsTag');
    var outputsInfo = document.getElementsByTagName('outputsTag');
    var outputTermsInfo = document.getElementsByTagName('outputTermsTag');
    var importInfo = document.getElementsByTagName('importTag');
    var pathInfo = document.getElementsByTagName('pathTag');
    var mintInfo = document.getElementsByTagName('mintTag');
    var layerInfo = document.getElementsByTagName('layerTag');

    for (var i = 0; i < numOperators; i++)
    {
        var operator = document.getElementById('operator_' + i).value;
        var name = document.getElementById('name_' + i).value;
        var inputs = document.getElementById('inputs_' + i).value;
        var inputTerms = document.getElementById('inputTerms_' + i).value;
        var outputs = document.getElementById('outputs_' + i).value;
        var outputTerms = document.getElementById('outputTerms_' + i).value;
        var Import = document.getElementById('import_' + i).value;
        var path = document.getElementById('path_' + i).value;
        var mint = document.getElementById('mint_' + i).value;
        var layer = document.getElementById('layer_' + i).value;

        var single_stage =
        {
            "operator":operator,
            "name":name,
            "inputs":inputs,
            "inputTerms":inputTerms,
            "outputs":outputs,
            "outputTerms":outputTerms,
            "import":Import,
            "picpath":path,
            "mint":mint,
            "layer":layer
        };

        for (var key in single_stage)
        {
            if (single_stage[key] == '')
            {
                delete single_stage.key;
            }
        }

        JSON.push(single_stage);

    }
    
    $.post('/api/generateUCF',{content:JSON});
}
