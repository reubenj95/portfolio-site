export default function EntryForm() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: '#eaeaea',
        height: '100%',
        color: '#000',
        padding: '50px',
      }}
    >
      <form action="">
        <div className="d-flex flex-column container">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
          <label htmlFor="sub_title">Sub-title</label>
          <input name="sub-title" type="text" />
          <label htmlFor="client">Client</label>
          <input name="client" type="text" />
          <label htmlFor="client_url">Client URL</label>
          <input name="client_url" type="text" />
          <label htmlFor="status">Status</label>
          <input name="status" type="text" />
          <label htmlFor="demo_url">Demo URL</label>
          <input name="demo_url" type="text" />
          <label htmlFor="repo_url">Repo URL</label>
          <input name="repo_url" type="text" />
          <label htmlFor="demo_url">Demo URL</label>
          <input name="status" type="text" />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows={5} />
        </div>
      </form>
    </div>
  )
}
