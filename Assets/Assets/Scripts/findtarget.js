 //import UnityEngine;
//import System.Collections;

class findtarget extends MonoBehaviour {
	
	var navDistance : float= 3;
	var navTarget : GameObject;
	private var navAgent : NavMeshAgent;
	var bulletprefab : Rigidbody; 
	var spawningpoint : GameObject;
	var shootforce : int = 20;

	
	function Start () : void {	 
	navAgent = GetComponent(NavMeshAgent);	
	var obj = new Array (GameObject.FindGameObjectsWithTag("Player"));
	navTarget=obj[0];
		
	}
	
	function Update () : void {
		
		if (!navAgent.hasPath)
		{
			if (!navAgent.pathPending)
			{
				navAgent.destination = navTarget.transform.position;
			}
		}
		else
		{
			if (navDistance < navAgent.remainingDistance)
			{
				navAgent.destination = navTarget.transform.position;
			}
			else if (navAgent.remainingDistance < navDistance)
			{
				navAgent.destination = transform.position;
				var Bullet : Rigidbody = Instantiate(bulletprefab, spawningpoint.transform.position , spawningpoint.transform.rotation);
				Bullet.velocity = spawningpoint.transform.TransformDirection(Vector3 (0,0,shootforce));
			}
		}
		
		
		 
	
		//print (navAgent.remainingDistance);
	}
	
}
