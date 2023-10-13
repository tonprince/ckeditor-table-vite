<script>
  import { ClassicEditor } from '$lib/ckeditor';

  const html = '<div>TEST</div>';

  function initEditor(node) {
    ClassicEditor.create(node, {
      htmlSupport: {
        allow: [
          {
            name: /.*/,
            attributes: true,
            classes: true,
            styles: true,
          },
        ],
      },
    }).catch((error) => {
      console.error(error);
    });
  }
</script>

<div class="mt-6 ckeditor">
  <div id="editor" use:initEditor>{@html html}</div>
</div>
