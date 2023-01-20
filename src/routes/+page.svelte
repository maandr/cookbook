<script>
  import Modal from '$components/Modal.svelte'

  let isModalVisible = false
</script>

<Modal isVisible={isModalVisible}>
  <h2>Saved</h2>
  <p>Deine Änderungen wurden gespeichert.</p>
  <button on:click={() => (isModalVisible = false)}>OK</button>
</Modal>

<button on:click={() => (isModalVisible = true)}>???</button>
