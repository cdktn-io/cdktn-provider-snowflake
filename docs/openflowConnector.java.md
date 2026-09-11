# `openflowConnector` Submodule <a name="`openflowConnector` Submodule" id="@cdktn/provider-snowflake.openflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowConnector <a name="OpenflowConnector" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector snowflake_openflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnector;

OpenflowConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .from(OpenflowConnectorFrom)
    .name(java.lang.String)
    .runtime(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OpenflowConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.from"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrom` <a name="putFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom"></a>

```java
public void putFrom(OpenflowConnectorFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts"></a>

```java
public void putTimeouts(OpenflowConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment"></a>

```java
public void resetComment()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnector;

OpenflowConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnector;

OpenflowConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnector;

OpenflowConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnector;

OpenflowConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpenflowConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpenflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpenflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput"></a>

```java
public OpenflowConnectorDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a>

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from"></a>

```java
public OpenflowConnectorFromOutputReference getFrom();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput"></a>

```java
public OpenflowConnectorShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts"></a>

```java
public OpenflowConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput"></a>

```java
public OpenflowConnectorFrom getFromInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput"></a>

```java
public IResolvable|OpenflowConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowConnectorConfig <a name="OpenflowConnectorConfig" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorConfig;

OpenflowConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .from(OpenflowConnectorFrom)
    .name(java.lang.String)
    .runtime(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OpenflowConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from"></a>

```java
public OpenflowConnectorFrom getFrom();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts"></a>

```java
public OpenflowConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

### OpenflowConnectorDescribeOutput <a name="OpenflowConnectorDescribeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorDescribeOutput;

OpenflowConnectorDescribeOutput.builder()
    .build();
```


### OpenflowConnectorFrom <a name="OpenflowConnectorFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorFrom;

OpenflowConnectorFrom.builder()
//  .definition(java.lang.String)
//  .path(java.lang.String)
//  .stage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition">definition</a></code> | <code>java.lang.String</code> | Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path">path</a></code> | <code>java.lang.String</code> | Path to the bundle within the stage. The bundle's root is used when omitted. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage">stage</a></code> | <code>java.lang.String</code> | Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`.

List the available IDs with the `snowflake_openflow_connector_definitions` data source. A connector created this way is a draft: it settles on STOPPED and stays there until a configuration version is committed, which this resource does not do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#definition OpenflowConnector#definition}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to the bundle within the stage. The bundle's root is used when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#path OpenflowConnector#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit.

A git repository stage works here too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#stage OpenflowConnector#stage}

---

### OpenflowConnectorShowOutput <a name="OpenflowConnectorShowOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorShowOutput;

OpenflowConnectorShowOutput.builder()
    .build();
```


### OpenflowConnectorTimeouts <a name="OpenflowConnectorTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorTimeouts;

OpenflowConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowConnectorDescribeOutputList <a name="OpenflowConnectorDescribeOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorDescribeOutputList;

new OpenflowConnectorDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get"></a>

```java
public OpenflowConnectorDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowConnectorDescribeOutputOutputReference <a name="OpenflowConnectorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorDescribeOutputOutputReference;

new OpenflowConnectorDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash">defaultVersionGitCommitHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias">lastVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash">lastVersionGitCommitHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri">lastVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName">lastVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri">lastVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition"></a>

```java
public java.lang.String getConnectorDefinition();
```

- *Type:* java.lang.String

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl"></a>

```java
public java.lang.String getConnectorUrl();
```

- *Type:* java.lang.String

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```java
public java.lang.String getDefaultVersionAlias();
```

- *Type:* java.lang.String

---

##### `defaultVersionGitCommitHash`<sup>Required</sup> <a name="defaultVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```java
public java.lang.String getDefaultVersionGitCommitHash();
```

- *Type:* java.lang.String

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```java
public java.lang.String getDefaultVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName"></a>

```java
public java.lang.String getDefaultVersionName();
```

- *Type:* java.lang.String

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```java
public java.lang.String getDefaultVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lastVersionAlias`<sup>Required</sup> <a name="lastVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias"></a>

```java
public java.lang.String getLastVersionAlias();
```

- *Type:* java.lang.String

---

##### `lastVersionGitCommitHash`<sup>Required</sup> <a name="lastVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```java
public java.lang.String getLastVersionGitCommitHash();
```

- *Type:* java.lang.String

---

##### `lastVersionLocationUri`<sup>Required</sup> <a name="lastVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```java
public java.lang.String getLastVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `lastVersionName`<sup>Required</sup> <a name="lastVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName"></a>

```java
public java.lang.String getLastVersionName();
```

- *Type:* java.lang.String

---

##### `lastVersionSourceLocationUri`<sup>Required</sup> <a name="lastVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```java
public java.lang.String getLastVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```java
public java.lang.String getLiveVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue"></a>

```java
public OpenflowConnectorDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a>

---


### OpenflowConnectorFromOutputReference <a name="OpenflowConnectorFromOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorFromOutputReference;

new OpenflowConnectorFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage">resetStage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage"></a>

```java
public void resetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue"></a>

```java
public OpenflowConnectorFrom getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---


### OpenflowConnectorShowOutputList <a name="OpenflowConnectorShowOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorShowOutputList;

new OpenflowConnectorShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get"></a>

```java
public OpenflowConnectorShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowConnectorShowOutputOutputReference <a name="OpenflowConnectorShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorShowOutputOutputReference;

new OpenflowConnectorShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition"></a>

```java
public java.lang.String getConnectorDefinition();
```

- *Type:* java.lang.String

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl"></a>

```java
public java.lang.String getConnectorUrl();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias"></a>

```java
public java.lang.String getDefaultVersionAlias();
```

- *Type:* java.lang.String

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```java
public java.lang.String getDefaultVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName"></a>

```java
public java.lang.String getDefaultVersionName();
```

- *Type:* java.lang.String

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```java
public java.lang.String getDefaultVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri"></a>

```java
public java.lang.String getLiveVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue"></a>

```java
public OpenflowConnectorShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a>

---


### OpenflowConnectorTimeoutsOutputReference <a name="OpenflowConnectorTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_connector.OpenflowConnectorTimeoutsOutputReference;

new OpenflowConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpenflowConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---



