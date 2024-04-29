export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (errMsg) {
    queue.push(`${errMsg.name}: ${errMsg.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
