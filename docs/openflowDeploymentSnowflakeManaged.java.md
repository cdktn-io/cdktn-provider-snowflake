# `openflowDeploymentSnowflakeManaged` Submodule <a name="`openflowDeploymentSnowflakeManaged` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentSnowflakeManaged <a name="OpenflowDeploymentSnowflakeManaged" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed snowflake_openflow_deployment_snowflake_managed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManaged;

OpenflowDeploymentSnowflakeManaged.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .eventTable(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OpenflowDeploymentSnowflakeManagedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.eventTable"></a>

- *Type:* java.lang.String

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable">resetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts"></a>

```java
public void putTimeouts(OpenflowDeploymentSnowflakeManagedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment"></a>

```java
public void resetComment()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable"></a>

```java
public void resetEventTable()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManaged;

OpenflowDeploymentSnowflakeManaged.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManaged;

OpenflowDeploymentSnowflakeManaged.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManaged;

OpenflowDeploymentSnowflakeManaged.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManaged;

OpenflowDeploymentSnowflakeManaged.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpenflowDeploymentSnowflakeManaged.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpenflowDeploymentSnowflakeManaged to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpenflowDeploymentSnowflakeManaged that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentSnowflakeManaged to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput">eventTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput"></a>

```java
public OpenflowDeploymentSnowflakeManagedDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters"></a>

```java
public OpenflowDeploymentSnowflakeManagedParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput"></a>

```java
public OpenflowDeploymentSnowflakeManagedShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts"></a>

```java
public OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput"></a>

```java
public java.lang.String getEventTableInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput"></a>

```java
public IResolvable|OpenflowDeploymentSnowflakeManagedTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentSnowflakeManagedConfig <a name="OpenflowDeploymentSnowflakeManagedConfig" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedConfig;

OpenflowDeploymentSnowflakeManagedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .eventTable(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OpenflowDeploymentSnowflakeManagedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts"></a>

```java
public OpenflowDeploymentSnowflakeManagedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

### OpenflowDeploymentSnowflakeManagedDescribeOutput <a name="OpenflowDeploymentSnowflakeManagedDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedDescribeOutput;

OpenflowDeploymentSnowflakeManagedDescribeOutput.builder()
    .build();
```


### OpenflowDeploymentSnowflakeManagedParameters <a name="OpenflowDeploymentSnowflakeManagedParameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParameters;

OpenflowDeploymentSnowflakeManagedParameters.builder()
    .build();
```


### OpenflowDeploymentSnowflakeManagedParametersEventTable <a name="OpenflowDeploymentSnowflakeManagedParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParametersEventTable;

OpenflowDeploymentSnowflakeManagedParametersEventTable.builder()
    .build();
```


### OpenflowDeploymentSnowflakeManagedShowOutput <a name="OpenflowDeploymentSnowflakeManagedShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedShowOutput;

OpenflowDeploymentSnowflakeManagedShowOutput.builder()
    .build();
```


### OpenflowDeploymentSnowflakeManagedTimeouts <a name="OpenflowDeploymentSnowflakeManagedTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedTimeouts;

OpenflowDeploymentSnowflakeManagedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentSnowflakeManagedDescribeOutputList <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedDescribeOutputList;

new OpenflowDeploymentSnowflakeManagedDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get"></a>

```java
public OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference;

new OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType">vpcType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname"></a>

```java
public java.lang.String getCustomIngressHostname();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink"></a>

```java
public IResolvable getUsePrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```java
public IResolvable getUseUserAuthOverPrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType"></a>

```java
public java.lang.String getVpcType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue"></a>

```java
public OpenflowDeploymentSnowflakeManagedDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a>

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableList <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParametersEventTableList;

new OpenflowDeploymentSnowflakeManagedParametersEventTableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get"></a>

```java
public OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference;

new OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue"></a>

```java
public OpenflowDeploymentSnowflakeManagedParametersEventTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a>

---


### OpenflowDeploymentSnowflakeManagedParametersList <a name="OpenflowDeploymentSnowflakeManagedParametersList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParametersList;

new OpenflowDeploymentSnowflakeManagedParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get"></a>

```java
public OpenflowDeploymentSnowflakeManagedParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowDeploymentSnowflakeManagedParametersOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedParametersOutputReference;

new OpenflowDeploymentSnowflakeManagedParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable">eventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable"></a>

```java
public OpenflowDeploymentSnowflakeManagedParametersEventTableList getEventTable();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue"></a>

```java
public OpenflowDeploymentSnowflakeManagedParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a>

---


### OpenflowDeploymentSnowflakeManagedShowOutputList <a name="OpenflowDeploymentSnowflakeManagedShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedShowOutputList;

new OpenflowDeploymentSnowflakeManagedShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get"></a>

```java
public OpenflowDeploymentSnowflakeManagedShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowDeploymentSnowflakeManagedShowOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference;

new OpenflowDeploymentSnowflakeManagedShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType">vpcType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname"></a>

```java
public java.lang.String getCustomIngressHostname();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink"></a>

```java
public IResolvable getUsePrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```java
public IResolvable getUseUserAuthOverPrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType"></a>

```java
public java.lang.String getVpcType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue"></a>

```java
public OpenflowDeploymentSnowflakeManagedShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a>

---


### OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference <a name="OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_deployment_snowflake_managed.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference;

new OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpenflowDeploymentSnowflakeManagedTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---



