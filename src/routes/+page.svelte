<script>
  import { ClassicEditor } from '$lib/ckeditor';

  const html = '<table><tr><td>TEST</td></tr></table>';

  function initEditor(node) {
    ClassicEditor.create(node)
      .then((editor) => {})
      .catch((error) => {
        console.error(error);
      });
  }
</script>

<div id="container">
  <div id="editor" use:initEditor>{@html html}</div>
</div>

<style>
  #container {
    margin: 20px auto;
  }
</style>
