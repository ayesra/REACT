

const Clock = () => {
  return (
    <div>

        <h2>
            {new Date().toLocaleString()}
              {/* toLocalString()=Geçerli veya belirtilen yerel ayari kullanarak bir tarih
              ve saati bir dizeye dönüştürür */}
        </h2>

    </div>
  )
}

export default Clock