<script>
  import { ClassicEditor } from '$lib/ckeditor';

  const html = '<table><tr><td>TEST</td></tr></table>';

  function initEditor(node) {
    ClassicEditor.create(node).catch((error) => {
      console.error(error);
    });
  }
</script>

<div class="mt-6 ckeditor">
  <div id="editor" use:initEditor>{@html html}</div>
</div>
